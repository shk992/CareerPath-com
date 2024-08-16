// פונקציה להצגת תיאור התהליך בדף process.html
function showDescription(id) {
    // מסתיר את כל התיאורים
    document.querySelectorAll('.process-description').forEach(el => {
        el.style.display = 'none';
    });
    // מציג את התיאור הנבחר
    const selectedDesc = document.getElementById(id);
    if (selectedDesc) {
        selectedDesc.style.display = 'block';
    }
}

// פונקציה לשליחת טופס (יכולה לשמש את כל הטפסים באתר)
function submitForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // כאן יש להוסיף לוגיקה לשליחת הטופס לשרת
            alert('הטופס נשלח בהצלחה!');
        });
    }
}

// אתחול הדף
document.addEventListener('DOMContentLoaded', function() {
    // אתחול טפסים
    submitForm('personality-form');
    submitForm('career-form');
    submitForm('study-program-form');

    // הוספת אנימציה לכפתורי CTA
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
