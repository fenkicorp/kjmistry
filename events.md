---
layout: default
title: Events
permalink: events
icon: "fas fa-calendar-alt"
---

<div class="container">
    <div class="page-header">
        <h2 id="timeline">Events</h2>
    </div>
    <ul class="timeline">
        {% assign sortedEvents = site.events | sort: 'order' | reverse %}
        {% for event in sortedEvents %}
          {% if event.side == 'left' %}
          <li>
          {% elsif event.side == 'right' %}
          <li class="timeline-inverted">
          {% endif %}
            <div class="timeline-badge danger"><i class="glyphicon glyphicon-check"></i></div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4 class="timeline-title">{{ event.title }}</h4>
                <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> {{ event.sub-title }}</small></p>
              </div>
              <div class="timeline-body">
                <p>{{ event.description }}</p>
              </div>
            </div>
          </li>
        {% endfor %}        
    </ul>
</div>
