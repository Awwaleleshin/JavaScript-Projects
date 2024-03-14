const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        // Remove 'active' class from all FAQs
        faqs.forEach(item => {
            if (item !== faq) {
                item.classList.remove('active');
            }
        });

        // Toggle 'active' class for the clicked FAQ
        faq.classList.toggle('active');
    });
});
