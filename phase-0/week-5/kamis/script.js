var main = document.getElementById('main');
var content = document.createElement('div');
content.setAttribute('id', 'content');

main.appendChild(content);

var date = 12;
for (var i = 0; i <= 2; i+=2) {
  var contentPost = document.createElement('div');
  contentPost.setAttribute('class', 'content-post');

  content.appendChild(contentPost);

  var h1 = document.createElement('h1');
  var number = i == 0 ? '' : i;
  var title = 'Judul Post ';
  title += number;
  var h1Text = document.createTextNode(title);

  h1.appendChild(h1Text);

  contentPost.appendChild(h1);

  var span = document.createElement('span');
  var spanText = document.createTextNode('Published on '+ date +' May 2016');

  span.appendChild(spanText);

  contentPost.appendChild(span);

  var p = document.createElement('p');
  var pText = document.createTextNode('Lorem Ipsum Dolor Sit Amet');

  p.appendChild(pText);

  contentPost.appendChild(p);

  var button = document.createElement('button');

  var buttonText = document.createTextNode('Share this Post');

  button.appendChild(buttonText);

  button.setAttribute('class', 'share-post-btn');

  button.addEventListener('click', function() {
    alert('You have shared this post!');
  });
  date++;
  contentPost.appendChild(button);
}
