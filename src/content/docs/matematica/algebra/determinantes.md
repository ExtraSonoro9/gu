---
title: Determinantes
---

Vimos previamente que no todas las matrices son inversibles.

¿Cómo podemos saber si una matriz tiene inversa?

El determinante de una matriz proporciona información para responder a esta pregunta.

Cuando vimos producto vectorial y mixto, habíamos definido determinantes de orden 2 y de orden 3. Recordamos aquí las fórmulas presentadas:

A cada matriz cuadrada puede asignársele un número real que llamaremos su determinante y designaremos como det(A)

o |A|

.

Para matrices 2×2

y 3×3 el determinante se calcula como sigue:

$$ A = \left( {\begin{array}{\*{20}{c}}{{a\_{11}}}&{{a\_{12}}}\\\\{{a\_{21}}}&{{a\_{22}}}\end{array}} \right)\\;\\;\\; \Rightarrow \\;\\;\\;\left| A \right| = \left| {\begin{array}{\*{20}{c}}{{a\_{11}}}&{{a\_{12}}}\\\\{{a\_{21}}}&{{a\_{22}}}\end{array}} \right| = {a\_{11}}\\;{a\_{22}} – {a\_{12}}\\;{a\_{21}} $$

$$ A = \left( {\begin{array}{\*{20}{c}}{{a\_{11}}}&{{a\_{12}}}&{{a\_{13}}}\\\\{{a\_{21}}}&{{a\_{22}}}&{{a\_{23}}}\\\\{{a\_{31}}}&{{a\_{32}}}&{{a\_{33}}}\end{array}} \right)\\;\\;\\; \Rightarrow \\;\\;\\;\left| A \right| = {a\_{11}}\\;\left| {\begin{array}{\*{20}{c}}{{a\_{22}}}&{{a\_{23}}}\\\\{{a\_{32}}}&{{a\_{33}}}\end{array}} \right|\\; – \\;{a\_{12}}\\;\left| {\begin{array}{\*{20}{c}}{{a\_{21}}}&{{a\_{23}}}\\\\{{a\_{31}}}&{{a\_{33}}}\end{array}} \right|\\; + \\;{a\_{13}}\\;\left| {\begin{array}{\*{20}{c}}{{a\_{21}}}&{{a\_{22}}}\\\\{{a\_{31}}}&{{a\_{32}}}\end{array}} \right| $$

Observación: El determinante no está definido para matrices rectangulares.

ejemplo: El determinante de A $$ A = \left( {\begin{array}{\*{20}{c}}3&{ – 1}&{ – 1}\\\2&1&0\\\3&1&2\end{array}} \right) $$

 $$ \det \left( A \right) = 3.\left| {\begin{array}{\*{20}{c}}1&0\\\1&2\end{array}} \right| – \left( { – 1} \right).\left| {\begin{array}{\*{20}{c}}2&0\\\3&2\end{array}} \right| + \left( { – 1} \right).\left| {\begin{array}{\*{20}{c}}2&1\\\3&1\end{array}} \right| $$

det(A)=3.2–(–1).4+(–1).(–1)

det(A)=11
