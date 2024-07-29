const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const icon = item.querySelector('.faq-question i');

  // Initially set the answer space to be hidden
  answer.style.maxHeight = '0';
  answer.style.visibility = 'hidden';

  question.addEventListener('click', () => {
    // Close all other open answers
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        const otherAnswer = otherItem.querySelector('.faq-answer');
        const otherIcon = otherItem.querySelector('.faq-question i');

        otherItem.classList.remove('active');
        otherAnswer.style.maxHeight = '0';
        otherAnswer.style.visibility = 'hidden';
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      }
    });

    // Toggle the current answer
    item.classList.toggle('active');

    if (item.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      answer.style.visibility = 'visible';
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
    } else {
      answer.style.maxHeight = '0';
      answer.style.visibility = 'hidden';
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
    }
  });
});
