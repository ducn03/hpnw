function tom_orion2(){  
            
    swal({  
    title: "Đố vui 4 câu",   
    text: "Nhấn Bắt đầu khi đã sẵn sàng ", 
    confirmButtonClass: "btn-danger",
    confirmButtonText: "Bắt đầu",
    closeOnConfirm: false,  
    closeOnCancel: false }, 
    function(isConfirm){  
    if (isConfirm) {   

    swal({  
    title: "Tiến độ (0/4) ", 
    text: "Câu 1: Theo truyền thuyết dân gian, Nhà Táo có 2 ông 1 bà hay 2 bà 1 ông hay 2 ông 2 bà? ",  
    type: "input",  
    showCancelButton: true,  
    closeOnConfirm: false,
    confirmButtonClass: "btn-danger",   
    showLoaderOnConfirm: true,
    animation: "slide-from-top",  
    inputPlaceholder: "không có gợi í đâu :> " },
    function(inputValue){   
    if (inputValue === false) return false;   
    if (inputValue !== "2 ông 1 bà") {   
    swal.showInputError("Đáp án: 2 ông 1 bà");   
    return false   }
       
    
    setTimeout(function(){

      swal({  
    title: "Tiến độ (1/4)", 
    text: "Câu 2: Ông Táo khi cưỡi cá chép bay về trời thì có đưa bà Táo đi chung không?",  
    type: "input",  
    showCancelButton: true,
    confirmButtonClass: "btn-danger",  
    closeOnConfirm: false,   
    animation: "slide-from-top",  
    inputPlaceholder: "Nhớ viết hoa đầu dòng :>" },
    function(inputValue){   
    if (inputValue === false) return false;   
    if (inputValue !== "Có") {   
        swal.showInputError("Đáp án: Có");   
        return false   } 
        

        setTimeout(function(){

            swal({  
          title: "Tiến độ (2/4)", 
          text: "Câu 3: Vào ngày Tết mọi người cùng ăn gì?",  
          type: "input",  
          showCancelButton: true,
          confirmButtonClass: "btn-danger",  
          closeOnConfirm: false,   
          animation: "slide-from-top",  
          inputPlaceholder: "Nhớ viết hoa đầu dòng với Tết viết hoa đầu chữ nhá :" },
          function(inputValue){   
          if (inputValue === false) return false;   
          if (inputValue !== "Ăn Tết") {   
              swal.showInputError("Đáp án: Ăn Tết");   
              return false   }
              
              

              setTimeout(function(){

                swal({  
              title: "Tiến độ (3/4)", 
              text: "Câu 4: Nước nào trên thế giới không có giao thừa: Việt Nam, Hàn Quốc hay Ấn Độ?",  
              type: "input",  
              showCancelButton: true,
              confirmButtonClass: "btn-danger",  
              closeOnConfirm: false,   
              animation: "slide-from-top",  
              inputPlaceholder: "Nhớ viết hoa đầu dòng nha :>" },
              function(inputValue){   
              if (inputValue === false) return false;   
              if (inputValue !== "Nước nào cũng có") {   
                  swal.showInputError("Đáp án: Nước nào cũng có");   
                  return false   }
                  
                  

                  setTimeout(function(){
                  
                          swal({  
                        title: "Tiến độ (4/4).", 
                        text: "Nhập tên của bạn vào đi nà.",  
                        type: "input",  
                        showCancelButton: true,
                        confirmButtonClass: "btn-danger",  
                        closeOnConfirm: false,   
                        animation: "slide-from-top",  
                        inputPlaceholder: "A, B, C , ... " },
                        function(inputValue){   
                        if (inputValue === false) return false;   
                        if (inputValue === "") {   
                        swal.showInputError("Không thể để trống được ");   
                        return false   }  
                        swal("OK !","" +inputValue+ " bạn rất là thông minh ", "success"); 
                            }); 
                    
                        },2000);


                            
             }); 
          
              },2000);


                        
         }); 
      
          },2000);
        
    
   }); 

    },2000);

    });

    }
    
});


    }
    tom_orion2();









    function tom_orion(){  
            
        swal({  
        title: "Bạn nhận được một lời chúc !",   
        text: "bạn vừa nhận được một lời chúc vào năm mới ", 
        imageUrl: "https://photos.google.com/u/0/photo/AF1QipM2H7Md-n58A0x2v6wu7bofFAkhuYHhDee0Lv__?hl=vi",
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Nhận lời chúc ngay",
        closeOnConfirm: false,  
        closeOnCancel: false }, 
        function(isConfirm){  
        if (isConfirm) {   
    
            swal({  
                title: "Nhập tên của bạn vào đi nà.", 
                text: "...",  
                type: "input",  
                showCancelButton: true,
                confirmButtonClass: "btn-danger",  
                closeOnConfirm: false,   
                animation: "slide-from-top",  
                inputPlaceholder: "A, B, C , ... " },
                function(inputValue){   
                if (inputValue === false) return false;   
                if (inputValue === "") {   
                swal.showInputError("Không thể để trống được ");   
                return false   }  
                swal("OK !",""+ " chúc " +inputValue+ " .... ", "success"); 
                    }); 
    
        }
        
    });    
    
        }
        tom_orion();    