<script src="https://code.jquery.com/jquery-3.6.0.js" 
      integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" 
      crossorigin="anonymous"></script>
<script>
   $(document).ready(function() {
      $.ajax({
         url: 'https://www.fruityvice.com/api/fruit/all',
         type: 'GET',
         success: function(result) {
            console.log(result);
         }
      })
   });
</script>