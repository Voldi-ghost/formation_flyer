 const counters = document.querySelectorAll('.counter');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const increment = target / 50;

        const update = () => {
          if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(update, 30);
          } else {
            counter.innerText = target;
          }
        };

        update();
        observer.unobserve(counter); // Empêche de recommencer si on scroll à nouveau
      }
    });
  });

  counters.forEach(counter => {
    observer.observe(counter);
  });