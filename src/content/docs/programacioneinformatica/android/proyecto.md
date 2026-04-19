---
title: Proyecto
---
Crear una app para android capaz de reconocer en tiempo real objetos con TensorFlow.

para ello creamos un projecto nuevo con Kotlin en Android Studio poniendo como SDK mínimo de 23 (Marshmallow) y:

## AndroidManifest.xml
Añadir antes de <application> para obtener permisos de cámara:
```
    <uses-permission android:name="android.permission.CAMERA"/>

    <uses-feature android:name="android.hardware.camera" android:required="true"/>

    <uses-feature android:name="android.hardware.camera.autofocus" android:required="false"/>
```
## build.gradle.kts (Module :app)
añadir entre las implementaciones del final lo siguiente (las versiones de las librerias pueden variar en el tiempo):
```
    implementation 'org.tensorflow:tensorflow-lite-task-vision:0.4.4'

    implementation 'com.quickbirdstudios:opencv-android:4.5.3.0'
    
    implementation 'org.tensorflow:tensorflow-lite-support:0.4.4'
    
    implementation 'org.tensorflow:tensorflow-lite-metadata:0.4.4'
```
## MainActivity.kt
```
package com.example.nombredelproyecto

import android.content.pm.PackageManager
import android.graphics.Bitmap
import android.os.Bundle
import android.util.Log
import android.view.SurfaceView
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import org.opencv.android.CameraBridgeViewBase
import org.opencv.android.OpenCVLoader
import org.opencv.android.Utils
import org.opencv.core.Mat
import org.tensorflow.lite.support.image.TensorImage
import org.tensorflow.lite.task.vision.detector.ObjectDetector

class MainActivity : AppCompatActivity(), CameraBridgeViewBase.CvCameraViewListener2 {

    private lateinit var cameraBridgeViewBase: CameraBridgeViewBase
    private lateinit var txtStatus: TextView
    private var objectDetector: ObjectDetector? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // 1. Pedir permiso de cámara si no lo tiene (Esto soluciona el negro en Android 10+)
        if (ActivityCompat.checkSelfPermission(this, android.Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this, arrayOf(android.Manifest.permission.CAMERA), 1)
        }

        cameraBridgeViewBase = findViewById(R.id.camera_view)
        cameraBridgeViewBase.visibility = SurfaceView.VISIBLE // Forzar visibilidad
        cameraBridgeViewBase.setCvCameraViewListener(this)
        cameraBridgeViewBase.setCameraPermissionGranted()
        txtStatus = findViewById(R.id.txtStatus)
        txtStatus.text = "Buscando frutas..."

        // 2. Cargar OpenCV y habilitar la vista inmediatamente
        if (OpenCVLoader.initDebug()) {
            cameraBridgeViewBase.enableView()
        }

        // 3. Cargar el modelo (con el bloque try-catch para que si falla, la cámara siga andando)
        try {
            val options = ObjectDetector.ObjectDetectorOptions.builder()
                .setScoreThreshold(0.4f)
                .setMaxResults(3)
                .build()
            objectDetector = ObjectDetector.createFromFileAndOptions(this, "1.tflite", options)
        } catch (e: Exception) {
            Log.e("TFLite", "Error de modelo: ${e.message}")
        }
    }

    override fun onResume() {
        super.onResume()
        if (OpenCVLoader.initDebug()) {
            cameraBridgeViewBase.enableView()
        }
    }

    override fun onPause() {
        super.onPause()
        cameraBridgeViewBase.disableView()
    }

    override fun onDestroy() {
        super.onDestroy()
        cameraBridgeViewBase.disableView()
    }

    override fun onCameraViewStarted(width: Int, height: Int) {}
    override fun onCameraViewStopped() {}

    override fun onCameraFrame(inputFrame: CameraBridgeViewBase.CvCameraViewFrame): Mat {
        val frameRGBA = inputFrame.rgba()

        // Si el detector no cargó, devolvemos el frame para que al menos se vea la cámara
        val detector = objectDetector ?: return frameRGBA
        val rotatedFrame = Mat()
        org.opencv.core.Core.rotate(frameRGBA, rotatedFrame, org.opencv.core.Core.ROTATE_90_CLOCKWISE)


        try {
            // 2. Preparar imagen para el detector
            val bitmap = Bitmap.createBitmap(rotatedFrame.cols(), rotatedFrame.rows(), Bitmap.Config.ARGB_8888)
            Utils.matToBitmap(rotatedFrame, bitmap)
            val results = detector.detect(TensorImage.fromBitmap(bitmap))

            // 3. ¡DIBUJAR LOS CUADRADITOS!
            for (detection in results) {
                val box = detection.boundingBox
                val label = detection.categories[0].label
                val score = detection.categories[0].score

                // Pintar el rectángulo (Color Verde = Scalar(0.0, 255.0, 0.0))
                org.opencv.imgproc.Imgproc.rectangle(
                    rotatedFrame,
                    org.opencv.core.Point(box.left.toDouble(), box.top.toDouble()),
                    org.opencv.core.Point(box.right.toDouble(), box.bottom.toDouble()),
                    org.opencv.core.Scalar(0.0, 255.0, 0.0), 2
                )

                // Poner el nombre de la fruta arriba del cuadro
                org.opencv.imgproc.Imgproc.putText(
                    rotatedFrame,
                    "$label ${(score * 100).toInt()}%",
                    org.opencv.core.Point(box.left.toDouble(), (box.top - 10).toDouble()),
                    org.opencv.imgproc.Imgproc.FONT_HERSHEY_SIMPLEX, 1.0,
                    org.opencv.core.Scalar(0.0, 255.0, 0.0), 2
                )
            }

            // Actualizar texto de estado
            runOnUiThread {
                if (results.isEmpty()) txtStatus.text = "Buscando frutas..."
                else txtStatus.text = "Detectado: ${results[0].categories[0].label}"
            }

        } catch (e: Exception) {
            Log.e("ErrorFrame", e.message ?: "")
        }



        return rotatedFrame
    }
}
```
## Descargar el modelo
Entrar a la siguiente web para descargar un modelo .tslite de ejemplo de TensorFlow: https://www.kaggle.com/models/tensorflow/efficientdet/tfLite/lite0-detection-default/1?tfhub-redirect=true

Luego cree la carpeta assets dentro de la carpeta main de su proyecto, pegue en ella el modelo que se descargó y tambien genere un labels.txt en el que debera añadir esto:
```
person
bicycle
car
motorcycle
airplane
bus
train
truck
boat
traffic light
fire hydrant
stop sign
parking meter
bench
bird
cat
dog
horse
sheep
cow
elephant
bear
zebra
giraffe
backpack
umbrella
handbag
tie
suitcase
frisbee
skis
snowboard
sports ball
kite
baseball bat
baseball glove
skateboard
surfboard
tennis racket
bottle
wine glass
cup

``` 
## Build y run

1. Para empezar hay que darle clic al elefante de la esquina superior derecha para sincronizar y configurar Gradle, esto descargará las librerias.
2. Luego hay que darle al icono del martillo para hacer build... los errores se verán en el debug inferior.
3. luego hay que entrar a las opciones de desarollador de su teléfono móvil y derle en depuracion por WiFi y leyendo el codigo qr que se genera en el ordenador al presionar el botón "No devices" se conectará y se habilitará la opción de RUN.
4. Al darle al triángulo que llama a la función RUN,y se instalará en su telefono la aplicación de prueba... si anda felicidades... si no ya sea que la app se cierra, no pide permiso para ver la cámara o aparece en negro pues deberá ver el Logcat que se encuentra en la seccion inferior derecha para buscar los errores, considere que debe tener el sdk y el ndk instalados.