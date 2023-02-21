if (false || null || undefined || "" || 0 || NaN) {
  console.log("This is not printed since the condition is false");
}
if (true && "hello" && 1 && -1 && "false") {
  console.log("This will be printed since the condition is true");
}
