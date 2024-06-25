                function validateAuthor(){
                    let author = document.getElementById("author");
                    let authorValue = author.value.trim();
                    let title = document.getElementById("title");
                    let titleValue = title.value.trim();
                    let min4 = document.getElementById("min4");
                    let mailWarning = document.getElementById("mailWarning");
                    let georgianRegex = /^[ა-ჰ\s]+$/;
                    if(authorValue.length <4) {
                        min4.classList.add("text-red-500");
                        min4.classList.remove("text-green-500");
                        author.classList.add("bg-red-100");
                        author.classList.add("border-red-500");
                    }else{
                        min4.classList.add("text-green-500");
                        min4.classList.remove("text-red-500");
                        author.classList.remove("bg-red-100");
                        author.classList.remove("border-red-500");
                    }
                    if (!georgianRegex.test(authorValue)) {
                        georgian.classList.add("text-red-500");
                        georgian.classList.remove("text-green-500");
                        author.classList.add("bg-red-100");
                        author.classList.add("border-red-500");
                    } else {
                        georgian.classList.add("text-green-500");
                        georgian.classList.remove("text-red-500");
                        author.classList.remove("bg-red-100");
                        author.classList.remove("border-red-500");
                    }

                    let min2words = document.getElementById("min2words")
                    let words = authorValue.trim().split(/\s+/)
                    if (words.length < 2) {
                        min2words.classList.add("text-red-500");
                        min2words.classList.remove("text-green-500");
                        author.classList.add("bg-red-100");
                        author.classList.add("border-red-500")
                    } else {
                        min2words.classList.add("text-green-500");
                        min2words.classList.remove("text-red-500");
                        author.classList.remove("bg-red-100");
                        author.classList.remove("border-red-500")
                    }
                    if(titleValue.length <4) {
                        min4title.classList.add("text-red-500");
                        min4title.classList.remove("text-green-500");
                        title.classList.add("bg-red-100");
                        title.classList.add("border-red-500")
                    }else{
                        min4title.classList.add("text-green-500");
                        min4title.classList.remove("text-red-500");
                        title.classList.remove("bg-red-100");
                        title.classList.remove("border-red-500")
                    }
                    let email = document.getElementById("email")
                    let emailValue = document.getElementById("email").value.trim();
                    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if(!emailRegex.test(emailValue) || !emailValue.endsWith("@redberry.ge")){
                        mailWarning.classList.remove("hidden")
                        email.classList.add("bg-red-100");
                        email.classList.add("border-red-500")
                    } else {
                        mailWarning.classList.add("hidden")
                        email.classList.remove("bg-red-100");
                        email.classList.remove("border-red-500")
                    }
                }


                document.getElementById("publishButton").addEventListener("click", validateAuthor);

                document.getElementById('imageIcon').style.display = 'none';
                document.getElementById('removeButton').style.display = 'none';
                
                function previewImageFromFile(file){
                    const imageIcon = document.getElementById('imageIcon');
                    const fileName = document.getElementById('fileName');
                    const removeButton = document.getElementById('removeButton');
                    const uploadText = document.getElementById('uploadText')

                    imageIcon.style.display = 'inline-block';
                    fileName.textContent = file.name;
                    removeButton.style.display = 'inline-block';
                    uploadText.style.display = 'none'

                    if(!file.type.startsWith('image/')){
                        alert('Only images are allowed!');
                        return;
                    }
                }
            
                function handleDrop(event) {
                    event.preventDefault();
                    document.getElementById('uploadArea').classList.remove('dragover');
                    const file = event.dataTransfer.files[0];
                    previewImageFromFile(file);
                }
            
                function previewImage(event) {
                    const file = event.target.files[0];
                    previewImageFromFile(file);
                }
                
            
                // Remove the uploaded image when the remove button is clicked
                document.getElementById('removeButton').addEventListener('click', function() {
                    const imageIcon = document.getElementById('imageIcon');
                    const fileName = document.getElementById('fileName');
                    const removeButton = document.getElementById('removeButton');
                    const uploadText = document.getElementById('uploadText');
            
                    imageIcon.style.display = 'none';
                    fileName.textContent = '';
                    removeButton.style.display = 'none';
                    uploadText.style.display = 'block';
                    document.getElementById('fileInput').value = ''; // Clear the file input
                });
