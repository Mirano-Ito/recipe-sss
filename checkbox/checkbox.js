document.addEventListener("DOMContentLoaded", () => {
    const checklist = document.querySelectorAll('#checklist input[type="checkbox"]');
    const checkbox2Container = document.getElementById('checkbox2-container');
    const step1 = document.getElementById('step1');
    const checkbox3Container = document.getElementById('checkbox3-container');
    const step2 = document.getElementById('step2');
    const checkbox4Container = document.getElementById('checkbox4-container');
    const step3 = document.getElementById('step3');

    
    checklist.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            
            if (Array.from(checklist).every(item => item.checked)) {
                checkbox2Container.style.display = "block";
            } else {
                checkbox2Container.style.display = "none";
                step1.checked = false;
                checkbox3Container.style.display = "none";
                step2.checked = false;
                checkbox4Container.style.display = "none";
                step3.checked = false;
            }
        });
    });


    step1.addEventListener("change", () => {
        if (step1.checked) {
            checkbox3Container.style.display = "block";
        } else {
            checkbox3Container.style.display = "none";
            step2.checked = false;
            checkbox4Container.style.display = "none";
            step3.checked = false;
        }
    });

    step2.addEventListener("change", () => {
        if (step2.checked) {
            checkbox4Container.style.display = "block";
        } else {
            checkbox4Container.style.display = "none";
            step3.checked = false;
        }
    });
});
