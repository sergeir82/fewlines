(($) ->
  
  #Show the number of lines
  class Fewlines
    constructor: (el, options) ->

      #Defaults:
      @defaults = {
        'closeMark' : 'close',
        'openMark' : '...',
        'newLine' : false,
        'lines' : 2
      }
    
      #Extending options:
      @opts = $.extend({}, @defaults, options)
      
      @$el = $(el)

      string = ''
      div = $("<div>x</div>").css({'position':'absolute', 'left':0,'top':"-3000px", "visibility" : "hidden"})
        .width($(@$el).width())
        .css($(@$el).css(['font-size', 'font-weight', 'font-family']))
        .appendTo('body')
      text = $(el).text()
      lineHeight = div.height()
      words = text.split(/\b/)
      needCut = false

      @openMark = $ "<a href='#'>#{@opts.openMark}</a>"
      @openMark.css({'display':'block'}) if @opts.newLine
      @openMark.bind 'click', (event) =>
        event.preventDefault()
        @show()

      @closeMark = $("<a href='#'>#{@opts.closeMark}</a>").hide()
      @closeMark.bind 'click', (event) =>
        event.preventDefault()
        @close()

      for i in [0..words.length-1]
        appendText = @getLines(words, i)
        appendText += @opts.openMark if !@opts.newLine
        div.text appendText
        if div.height() > @opts.lines * lineHeight
          needCut = true  
          break


      visLines = @getLines(words, i-1)
      hidLines = text.slice visLines.length
      @hidePart = $('<span>').hide().text(hidLines)

      if needCut
        @$el.text(visLines).append(@openMark).append(@hidePart).append(@closeMark)

      div.remove()

      @$el

    getLines: (words, i) ->
      words[0..i].join('').replace(/\W+$/, '')

    show: ->
      @openMark.hide()
      @hidePart.show()
      @closeMark.css("display", "block")
    
    close: ->
      @openMark.show()
      @hidePart.hide()
      @closeMark.hide()

    # Separate functionality from object creation
    init: ->
      _this = this

  
  # The actual plugin
  $.fn.fewlines = (options) ->
    if @length
      @each ->
        rev = new Fewlines(this, options)
        rev.init()
        $(this).data "fewlines", rev

) jQuery