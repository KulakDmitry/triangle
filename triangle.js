const num = 10;

isTriangle();

function message(i, j, k) {
  if (isTriangle(i, j, k)) {
    answer = "можно";
  } else {
    answer = "нельзя";
  }
  console.log(
    `На сторонах a = ${i}, b = ${j}, c = ${k} ${answer} построить треугольник`
  );
}

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    for (let k = 1; k <= num; k++) {
      message(i, j, k);
    }
  }
}
