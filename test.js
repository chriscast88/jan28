var artists = [
  'Lauren Napolitano',
  'Ernest Zacharevic',
  'Zio Ziegler',
  'Doze Green'
]

var imageInfo = [
  {
    name: artists[0],
    location: 'Denver',
    maps: 'https://www.google.com/maps/@39.7637544,-104.9786892,3a,75y,193.38h,78.98t/data=!3m6!1e1!3m4!1sVOgsJ65ZBrBT4ByYLsZ_sQ!2e0!7i13312!8i6656!6m1!1e1'
  }
]


var describeImage = function (imageInfo){

  for (var i =0; i<imageInfo.length; i++){
    var allNames += imageInfo[i].name;
  }
  return allNames;
}


describeImage(imageInfo)
// var finalInfo = describeImage(imageInfo);
