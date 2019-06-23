---
layout: default
title: About
permalink: /about/
icon: "far fa-user"
---


<article>
<div class="row align-items-center">

  <div class="col-md-5 text-center animated fadeIn">

    <div class="row justify-content-center">
      <div class="col-7">
        <img src="/images/kishbw.png"  alt="Kishan Mistry" title="Kishan Mistry" class="img-fluid" />

      </div>
    </div>
  </div>
  <div class="col-md-7 pt-4">

  <h4> Dr Kishan Mistry MPharm BDS
  </h4>
<p class="font-weight-light small text-muted">
GDC: 277250</p>
  <h4>Education</h4>

  {% for e in site.data.education %}
<div class="row">
  <div class="col-md-12 ">
  <div class="card mb-3 shadow-sm">
    <div class="card-body">
      <div class="row align-items-center">
        <div class="col-sm-2 col-12">
            <a target="blank1" href="{{e.url}}">
              <img src="{{e.image}}" class="img-fluid">
            </a>
        </div>
        <div class="col-sm-10 col-12">
          <div class="card-title h6">
            {{e.uni}}
          </div>
          <div class="card-text">
            <span class="text-muted">{{e.from}} - {{e.to}}</span> - {{e.degree}}
            {% if e.youtubeId %}
            <div class="row mt-3">
              <div class="col-md-9">
                <div class="embed-responsive embed-responsive-16by9">
                  {% include youtubePlayer.html id=e.youtubeId %}
                </div>
              </div>
            </div>
            {% endif  %}
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
  {% endfor %}


  <!--<h4>Interests</h4>-->

  </div>

</div>
</article>
