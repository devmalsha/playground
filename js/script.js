function orderChikenWith(sideDish) {
  if (sideDish == undefined) {
    console.log("chicken only");
  } else {
    console.log("Chicken with " + sideDish);
  }
}
orderChikenWith();
orderChikenWith("rice");
