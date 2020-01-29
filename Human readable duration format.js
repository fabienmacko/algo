const formatDuration = seconds => {

  var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
  var secondsText = numseconds > 1 ? " seconds" : " second";
  var secondsString = numseconds > 0 ? numseconds + secondsText : "";

  var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
  var minutesText = numminutes > 1 ? " minutes" : " minute";
  var minutesSeparator = numseconds == 0 ? "" : " and ";
  var minutes = numminutes > 0 ? numminutes + minutesText + minutesSeparator : "";

  var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
  var hoursText = numhours > 1 ? " hours" : " hour";
  var hoursSeparator = ", ";
  if (numminutes == 0) {
    hoursSeparator = "";
  }
  if ((numminutes == 0 && numseconds > 0) || (numseconds == 0 && numminutes > 0)) {
    hoursSeparator = " and ";
  }

  var hours = numhours > 0 ? numhours + hoursText + hoursSeparator : "";

  var numdays = Math.floor((seconds % 31536000) / 86400);
  var daysText = numdays > 1 ? " days" : " day";
  var daysSeparator = ", ";
  var days = numdays > 0 ? numdays + daysText + daysSeparator : "";

  var numyears = Math.floor(seconds / 31536000);
  var yearsText = numyears > 1 ? " years" : " year";
  var yearsSeparator = ", ";
  var years = numyears > 0 ? numyears + yearsText + yearsSeparator : "";

  var fullText = years + days + hours + minutes + secondsString;

  if (fullText == "") {
    fullText = "now"
  }
 
  return fullText;
}
