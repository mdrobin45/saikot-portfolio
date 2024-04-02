<template>
  <!--================ Start Contact Area =================-->
  <section id="contact" class="contact_area subscription_box scroll_top">
    <div class="container">
      <h2 class="contact_header">Contact</h2>
      <div class="row">
        <div class="col-lg-3">
          <div class="contact_info">
            <div class="info_item">
              <i class="lnr lnr-home"></i>
              <h6>Dhaka, Bangladesh</h6>
              <p>House: 32/1, Road: 03, Shyamoli</p>
            </div>
            <div class="info_item">
              <i class="lnr lnr-phone-handset"></i>
              <h6><a href="#">+(880) 1303-094897</a></h6>
              <p>Mon to Fri 10 am to 7 pm</p>
            </div>
            <div class="info_item">
              <i class="lnr lnr-envelope"></i>
              <h6><a href="#">soikat@reformedtech.org</a></h6>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
        <div class="col-lg-9">
          <form
            data-netlify="true"
            class="row contact_form"
            method="post"
            id="contactForm"
          >
            <div class="col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter email address"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="subject"
                  name="subject"
                  placeholder="Enter Subject"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <textarea
                  class="form-control"
                  name="message"
                  id="message"
                  rows="1"
                  placeholder="Enter Message"
                ></textarea>
              </div>
            </div>
            <div class="col-md-12 text-right">
              <button type="submit" value="submit" class="primary-btn hover">
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!--================ End Newsletter Area =================-->
</template>
