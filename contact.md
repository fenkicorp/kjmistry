---
layout: default
title: Contact
permalink: contact
icon: far fa-envelope
sitemap: false
---
## Contact
Please use the form below to contact me for the following or anything else:

<ul class="list-unstyled">
        <ul>
            <li>Pharmacy related lecture bookings</li>
            <li>Website design for individuals or practices</li>
        </ul>
</ul>


<div class="container">
	<div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="well well-sm">
          <form class="form-horizontal" action="https://formspree.io/{{site.email}}" method="post">

					<input type="hidden" name="_next" value="/thank-you"/>
          <fieldset>

            <!-- Name input-->
            <div class="form-group">
              <label class="col-md-3 control-label" for="name">Name</label>
              <div class="col-md-9">
                <input id="name" name="name" type="text" placeholder="Your name" class="form-control">
              </div>
            </div>

            <!-- Email input-->
            <div class="form-group">
              <label class="col-md-3 control-label" for="email">Your E-mail</label>
              <div class="col-md-9">
                <input id="email" name="email" type="text" placeholder="Your email" class="form-control">
              </div>
            </div>

            <!-- Message body -->
            <div class="form-group">
              <label class="col-md-3 control-label" for="message">Your message</label>
              <div class="col-md-9">
                <textarea class="form-control" id="message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>
              </div>
            </div>

            <!-- Form actions -->
            <div class="form-group">
              <div class="col-md-12 text-left">
                <button type="submit" class="btn btn-dark btn-lg">Submit</button>
              </div>
            </div>
          </fieldset>
          </form>
        </div>
      </div>
	</div>
</div>
