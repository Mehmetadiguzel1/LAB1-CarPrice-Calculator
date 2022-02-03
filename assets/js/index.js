$(function(){
    //  using work like JSON
    var brands = {
      maserati : {
        name : 'Maserati XC2700',
        price : 1000000,
        photos : {
          0 : 'assets/images/maserati.jpg'
        },
        equipments : {
          colors : [
            { name : 'Yellow' , price : 50000 , image : 'assets/images/col_1.png'},
            { name : 'Red' , price : 80000 , image : 'assets/images/col_2.png'},
            { name : 'Piano Black' , price : 120000 , image : 'assets/images/col_3.png'},
          ],
          engines : [
            { name : 'Engine V1.6 TSI' , price : 250000 , image : 'assets/images/1.png'},
            { name : 'Engine V2.0 DSI' , price : 580000 , image : 'assets/images/2.png'},
            { name : 'Engine V3.0 TSI' , price : 720000 , image : 'assets/images/3.png'},
          ]
        }
      },
      mercedes : {
        name : 'Mercedes XV950',
        price : 1000000,
        photos : {
          0 : 'assets/images/mercedes_01.jpg'
        },
        equipments : {
          colors : [
            { name : 'Yellow' , price : 50000 , image : 'assets/images/col_1.png'},
            { name : 'Red' , price : 80000 , image : 'assets/images/col_2.png'},
            { name : 'Piano Black' , price : 120000 , image : 'assets/images/col_3.png'},
          ],
          engines : [
            { name : 'Engine V1.6 TSI' , price : 250000 , image : 'assets/images/1.png'},
            { name : 'Engine V2.0 DSI' , price : 580000 , image : 'assets/images/2.png'},
            { name : 'Engine V3.0 TSI' , price : 720000 , image : 'assets/images/3.png'},
          ],
          break : [
            { name : '2 disk' , price : 250000 , image : 'assets/images/1.png'},
            { name : '4 disk' , price : 580000 , image : 'assets/images/2.png'},
          ]
        }
      }
    };

    $('#packageType').change(function(){

      var $this = $(this);
      var brand = $this.val();
      var selectedCar = brands[brand];

      $('#price').html('');

      var total = 0;

      $('.equipments').find('div').remove();

      $('.SelectedCar').find('img').attr('src',selectedCar['photos'][0]);

      $('.equipment-list').find('li').remove();

      $(brands[brand]['equipments']).each(function(index,equipments){
        $.each(equipments,function(ind,val){
            var html = '<div class="form-col">'+
              '<select name="'+ind+'" id="'+ind+'">'+
                '<option>Please Select</option>'+
              '</select>'+
            '</div>';
            $('.equipments').append(html);
            $.each(val,function(k,v){
              $('.equipments').find('select[name="'+ind+'"]').append('<option value="'+v.price+'">'+v.name+'</option>')
            })
        });
      });

      total = brands[brand]['price'];

      $('.equipments').find('select').change(function(){
          $('#price').trigger('change');
      });

      // $('#price').html('$ ' + parseInt(total).toLocaleString());



      $('#price').change(function(){

        $(this).html('');

        total = brands[brand]['price'];

        var selects = $('.equipments').find('select');

        $('.equipment-list').find('li').remove();

        $.each(selects,function(a,b){
          var selectEqu = $(b);
          var index = selectEqu.prop('selectedIndex');

          if(index != 0){

            var equ = selectedCar['equipments'][selectEqu.attr('id')][index-1];
            if(equ.image){
              $('.equipment-list').append('<li><p><span class="image"><img src="'+equ.image+'"/></span><span class="title">'+equ.name+'</span><span class="price">'+parseInt(equ.price).toLocaleString()+'</span></p></li>');
            }

            total += parseInt($(b).val());

          }

        });

        $(this).html('$ ' + parseInt(total).toLocaleString());

      });

      $('#price').html('$ ' + parseInt(total).toLocaleString());

      // var this = $(this);
      //
      // var price = this.data('price');
      // console.log(price);

    });

});
