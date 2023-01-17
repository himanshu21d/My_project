$(document).ready(function () {
    $(".week").click(function () {
      $(".card-two").slideToggle();
      if ($('.card-two').css('display') != 'none')
        $('.card-three').hide('slow');
    });
});
  
$(document).ready(function () {
      $(".month").click(function () {
        $(".card-three").slideToggle();
        if ($('.card-three').css('display') != 'none')
          $('.card-two').hide('slow');
      });
});
    
$(document).ready(function () {
    $(".card").dblclick(function () {
        $(".card-four").slideToggle();
        if ($('.card').css('display') != 'none')
        $('.card').hide('slow');
    });
});

$(document).ready(function () {
    $(".card").dblclick(function () {
        if ($('.card-two').css('display') != 'none')
        $('.card-two').hide('slow');
    });
});

$(document).ready(function () {
    $(".card").dblclick(function () {
        if ($('.card-three').css('display') != 'none')
        $('.card-three').hide('slow');
    });
});
  
$(document).ready(function () {
    $(".card-four").dblclick(function () {
      $(".card-five").slideToggle();
      if ($('.card-four').css('display') != 'none')
        $('.card-four').hide('slow');
    });
});

$(document).ready(function () {
    $(".card-five").dblclick(function () {
      $(".card").slideToggle();
      if ($('.card-five').css('display') != 'none')
        $('.card-five').hide('slow');
    });
});
  
/*
<script type="module">
  import interact from
      'https://cdn.interactjs.io/v1.10.13/interactjs/index.js'

    var element = document.getElementById('card')
    var x = 0; var y = 0

    interact(element)
      .draggable({
        modifiers: [
          interact.modifiers.snap({
            targets: [
              interact.snappers.grid({ x: 1, y: 1 })
            ],
            range: Infinity,
            relativePoints: [{ x: 0, y: 0 }]
          }),
          interact.modifiers.restrict({
            restriction: element.parentNode,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
            endOnly: true
          })
        ],
        inertia: true
      })
      .on('dragmove', function (event) {
        x += event.dx
        y += event.dy

        event.target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
      })
</script>
<script type="module">
  import interact from
    'https://cdn.interactjs.io/v1.10.13/interactjs/index.js'

  var element = document.getElementById('card-four')
  var x = 0; var y = 0

  interact(element)
    .draggable({
      modifiers: [
        interact.modifiers.snap({
          targets: [
            interact.snappers.grid({ x: 1, y: 1 })
          ],
          range: Infinity,
          relativePoints: [{ x: 0, y: 0 }]
        }),
        interact.modifiers.restrict({
          restriction: element.parentNode,
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
          endOnly: true
        })
      ],
      inertia: true
    })
    .on('dragmove', function (event) {
      x += event.dx
      y += event.dy

      event.target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
    })
</script>
*/