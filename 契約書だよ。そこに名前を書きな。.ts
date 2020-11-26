const n = Deno.args[0];
if (!n) Deno.exit();
const m = n[new Date().getTime() % n.length];
console.log(
  `フン。${n}というのかい。贅沢な名だねぇ。今からお前の名前は${m}だ。いいかい、${m}だよ。分かったら返事をするんだ、${m}!!`,
);

export {};
