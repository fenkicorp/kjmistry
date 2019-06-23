---
layout: default
title: Downloads
permalink: downloads
icon: "fas fa-file-download"
---
## Downloads

<div class="list-group">

  {% assign orderedDownloads = site.downloads | sort: 'order' | reverse %}
  {% for d in orderedDownloads %}
  <p>
    <a href="{{ d.filePath }}" class="list-group-item list-group-item-action">
      <i class="{{ d.icon }} text-primary fa-lg"></i> &nbsp; {{ d.name }}
      <br>
      <small class="text-muted">{{d.description}}</small>
    </a>
  </p>

  {% endfor %}

</div>
