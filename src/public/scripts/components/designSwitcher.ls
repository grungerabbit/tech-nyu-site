define(["flight/component", "mixins"], (defineComponent, mixins) ->

  defineComponent(mixins.usesSassVars, ->
    @defaultAttrs(do
      sectionsSelector: '.objective'
    )

    @$sections

    # Note: code expects that on the first calculation
    # of the design mode, oldDesignSizeKey and oldScrollMode 
    # key will be null. So don't fuck with these defaults.
    @oldDesignSizeKey
    @oldScrollMode
    @designSizeKey    # LARGE or SMALL
    @scrollMode  # paginated or scroll

    @getDesignSizeKey = -> 
      if !matchMedia || window.matchMedia("(min-width: 920px) and (min-height:620px) and (max-aspect-ratio: 1530/750)").matches
        \LARGE
      else
        \SMALL

    @getScrollMode = ->
      self = @
      if @getDesignSizeKey! != \LARGE
        "scroll" 
      else
        mode = "paginated"
        @$sections.each( ->
          $section = $(@)
          if ($section.outerHeight! + self.sassVars.paginatedMarginTopPx! - $('nav').height!) > $(window).outerHeight!
            mode := "scroll"
            false
        )
        mode

    @getDesignMode = ->
      @oldScrollMode    = @scrollMode
      @oldDesignSizeKey = @designSizeKey
      @designSizeKey    = @getDesignSizeKey!
      @scrollMode       = @getScrollMode!

      if((@oldScrollMode != @scrollMode) || (@oldDesignSizeKey != @designSizeKey))
        @trigger('designModeChange', {}{oldScrollMode, scrollMode, oldDesignSizeKey, designSizeKey} = @)

    @after('initialize', ->
      @$sections = @select(\sectionsSelector)
      @getDesignMode!
      @on(window, 'resize', @getDesignMode)
      @on(document, 'sectionContentModified', @getDesignMode)
    )
  )
);
