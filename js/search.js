(function(){
  var overlay = $('#site-search-overlay');
  var input = $('#site-search-input');
  var resultsEl = $('#site-search-results');
  if(!overlay.length) return;

  var index = null;
  var loading = false;

  function openSearch(){
    overlay.addClass('is-open');
    setTimeout(function(){ input.focus(); }, 50);
    if(!index && !loading){
      loading = true;
      var parser = new DOMParser();
      $.getJSON('/search.json').done(function(data){
        index = data.map(function(item){
          var doc = parser.parseFromString(item.content || '', 'text/html');
          return {
            title: item.title || '',
            url: item.url,
            text: (doc.body.textContent || '').replace(/\s+/g, ' ')
          };
        });
        if(input.val()) renderResults(input.val());
      });
    }
  }

  function closeSearch(){
    overlay.removeClass('is-open');
  }

  function escapeHtml(s){
    return s.replace(/[&<>"]/g, function(c){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];
    });
  }

  function renderResults(query){
    query = query.trim().toLowerCase();
    resultsEl.empty();
    if(!query) return;
    if(!index){
      resultsEl.append('<li class="site-search-hint">索引加载中…</li>');
      return;
    }
    var hits = [];
    for(var i = 0; i < index.length; i++){
      var item = index[i];
      var titleHit = item.title.toLowerCase().indexOf(query) >= 0;
      var textPos = item.text.toLowerCase().indexOf(query);
      if(titleHit || textPos >= 0){
        var excerpt = '';
        if(textPos >= 0){
          var start = Math.max(0, textPos - 30);
          excerpt = (start > 0 ? '…' : '') + item.text.substring(start, textPos + query.length + 50) + '…';
        }
        hits.push({item: item, titleHit: titleHit, excerpt: excerpt});
      }
      if(hits.length >= 30) break;
    }
    hits.sort(function(a, b){ return (b.titleHit ? 1 : 0) - (a.titleHit ? 1 : 0); });
    if(!hits.length){
      resultsEl.append('<li class="site-search-hint">没有找到相关文章</li>');
      return;
    }
    hits.slice(0, 10).forEach(function(h){
      resultsEl.append(
        '<li class="site-search-item"><a href="' + h.item.url + '">' +
        '<span class="site-search-title">' + escapeHtml(h.item.title) + '</span>' +
        (h.excerpt ? '<span class="site-search-excerpt">' + escapeHtml(h.excerpt) + '</span>' : '') +
        '</a></li>'
      );
    });
  }

  $('#nav-search-toggle').click(function(e){
    e.stopPropagation();
    if(overlay.hasClass('is-open')) closeSearch();
    else openSearch();
  });

  input.on('input', function(){ renderResults($(this).val()); });

  overlay.click(function(e){
    if(e.target === this) closeSearch();
  });

  $(document).keydown(function(e){
    if(e.key === 'Escape') closeSearch();
  });
})();
