
            document.querySelectorAll('.read-more').forEach(link => {
                 link.addEventListener('click', function(event) {
                 event.preventDefault();
                 const targetId = this.getAttribute('data-target');
                 document.getElementById(targetId).style.display = 'inline';
                 this.style.display = 'none';
                 document.querySelector(`.show-less[data-target='${targetId}']`).style.display = 'inline';
                 });
             });

            document.querySelectorAll('.show-less').forEach(link => {
                 link.addEventListener('click', function(event) {
                 event.preventDefault();
                 const targetId = this.getAttribute('data-target');
                   document.getElementById(targetId).style.display = 'none';
                this.style.display = 'none';
                 document.querySelector(`.read-more[data-target='${targetId}']`).style.display = 'inline';
                 });
             });
            
             document.addEventListener('DOMContentLoaded', function() {
                const seeMoreButton = document.getElementById('see-more');
                const itemsToShow = 3;
                const mediaQuery = window.matchMedia('(max-width: 650px)');
            
                function handleSeeMoreClick() {
                    let hiddenItems = document.querySelectorAll('.proj-tile.hidden-initial');
            
                    for (let i = 0; i < itemsToShow && i < hiddenItems.length; i++) {
                        hiddenItems[i].classList.remove('hidden-initial');
                    }
            
                    if (document.querySelectorAll('.proj-tile.hidden-initial').length === 0) {
                        seeMoreButton.style.display = 'none';
                    }
                }
            
                function handleMediaChange(event) {
                    if (event.matches) {
                        document.querySelectorAll('.proj-tile').forEach((item, index) => {
                            if (index >= 3) {
                                item.classList.add('hidden-initial');
                            }
                        });
                        seeMoreButton.style.display = 'block';
                        seeMoreButton.addEventListener('click', handleSeeMoreClick);
                    } else {
                        document.querySelectorAll('.proj-tile').forEach(item => {
                            item.classList.remove('hidden-initial');
                        });
                        seeMoreButton.style.display = 'none';
                        seeMoreButton.removeEventListener('click', handleSeeMoreClick);
                    }
                }
            
                handleMediaChange(mediaQuery);
            
                mediaQuery.addListener(handleMediaChange);
            });
            
            
             document.getElementById('copy-link').addEventListener('click', function(event) {
                event.preventDefault();
                var phoneNumber = document.getElementById('phone-number').innerText.trim();
                 var tempInput = document.createElement('input');
                
                 tempInput.value = phoneNumber;
             document.body.appendChild(tempInput);
                  tempInput.select();
                  tempInput.setSelectionRange(0, 99999);
                 document.execCommand('copy');
                document.body.removeChild(tempInput);
                 alert('Phone number copied to clipboard: ' + phoneNumber);
             });


            
     
