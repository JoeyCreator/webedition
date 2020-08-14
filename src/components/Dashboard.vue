<template>
  <div>
    <h1>Canada COVID-19 Tracker</h1>
    <h4 class="text-xs">
      Source:
      <a
        class="border-b border-dotted text-blue-600 border-blue-600 hover:text-blue-800 hover:border-blue-800"
        target="_blank"
        href="https://www.canada.ca/fr/sante-canada.html"
      >Canada Deptartment of Health</a> &middot; Last updated 8/14/2020 14:40 p.m.
    </h4>
    <div class="alert">
      <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
      <strong>Attention!</strong>
      For the most up to date information regarding COVID-19 in Canada, please consult Canada Deptartment of Health. This site should not be used for life saving information - instead, rather, a source for numbers and statistics.
    </div>
    <br>
    <iframe
      src="https://experience.arcgis.com/experience/4ab8757241cc4d3fab81c8f86a501ce9"
      height="550"
      width="90%"
    ></iframe>
    <hr style="width:100%;text-align:left;margin-left:0">
    <div class="pb-4">
      <h4 class="text-xs">
        Developed by Joey Cadieux &middot;
        <a
          class="text-blue-600"
          href="mailto:joeycadieux161@gmail.com"
        >Contact Me</a> &middot;
        <a class="text-blue-600" href="https://forms.gle/Z3mfTuL72Tt4HrKm7">Found an issue?</a>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard"
};
</script>

<style scoped>
main {
  padding: 100px;
}
.alert {
  padding: 20px;
  background-color: #f44336;
  color: white;
}

.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: black;
}
</style>