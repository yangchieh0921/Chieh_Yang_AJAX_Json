(() => {
    
    //make an AJAX request using the Ferch API
    fetch('./data/classData.json')
     .then(res => res.json())
     .then(data => {
         console.log(data);

         //handleData
         //here's where you would call the dunction that puts the pieces on the page 
     })
     .catch(() => {
         console.log(err);
     })

     function handleData(data) {
         
        let course_name  = documrnt.querySelector('c-name');
            course_name.innerHTML = data.coursename;
        
        let course_code = document.querySelector('.c-code');
            course_code.innerHTML = data.coursecode;

        let prof_name = document.querySelector('p-name');
            prof_name.innerHTML = data.profname;
        
        let class_time = document.querSelector('.c-time');
            class_time.innerHTML = data.classname;
     }

     let classTimeList = document.querySelector(".list-inline");
        let content = '';

        data.classtime.forEach(time => {
            content += `<li>${time}</li>`;
        })
        classTimeList.innerHTML = content;





})();