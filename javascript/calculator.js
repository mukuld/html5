function computeForm(form)
{
   var flawn = form.lawn.value;
   var flawn_rate = 0.20;
   var fweed = form.weed.value;
   var fweed_rate = 7.00;
   var fhedge = form.hedge.value;
   var fhedge_rate = 0.50;
   var ffertz = form.fertz.value;
   var ffertz_rate = 20.00;
   var fground = form.ground.value;
   var fground_rate = 15.00;
   var ftotal_cost = 0;

   ftotal_cost = (flawn*flawn_rate) + (fweed*fweed_rate) + (fhedge*fhedge_rate) + (ffertz*ffertz_rate) + (fground*fground_rate);

form.total_cost.value = "$" + ftotal_cost;
}

function clearForm(form)

{
   form.lawn.value = "";
   form.weed.value = "";
   form.hedge.value = "";
   form.fertz.value = "";
   form.ground.value = "";
   form.total_cost.value = "";
}

</script>