<template>
  <!--================Start Portfolio Area =================-->
  <section class="portfolio_area mt-5" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="main_title text-left">
            <h2>
              quality work <br />
              Recently done project
            </h2>
          </div>
        </div>
      </div>
      <div class="filters portfolio-filter">
        <div
          id="filters"
          class="button-group pb-5 justify-content-around d-flex flex-wrap"
        >
          <button class="first-tab tab-btn is-checked" data-filter="*">
            All
          </button>
          <button class="tab-btn" data-filter=".wordpress">Wordpress</button>
          <button class="tab-btn" data-filter=".nodejs">Nodejs</button>
          <button class="tab-btn" data-filter=".vuejs">Vuejs</button>
          <button class="tab-btn" data-filter=".react">React</button>
          <button class="tab-btn" data-filter=".php">php</button>
          <button class="tab-btn" data-filter=".nuxtjs">nuxtjs</button>
          <button class="tab-btn" data-filter=".flutter">flutter</button>
          <button class="tab-btn" data-filter=".bootstrap">Bootstrap</button>
          <button class="last-tab tab-btn" data-filter=".eleventy">
            Eleventy
          </button>
        </div>
      </div>

      <div class="filters-content">
        <div class="iso-wrapper">
          <div
            data-category="wordpress"
            class="col-lg-2 col-md-6 element-item all wordpress"
          >
            <div class="portfolio_box">
              <div class="single_portfolio">
                <div class="overlay"></div>
                <a href="https://toads.reformedtech.org/">
                  <img
                    class="img-fluid w-100"
                    src="~/assets/img/portfolio/toads.png"
                    alt="toads"
                  />
                  <div class="icon">
                    <span class="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div class="short_info">
                <h4>Toads</h4>
                <p>WordPress, Fashion, eCommerce</p>
              </div>
            </div>
          </div>

          <div
            data-category="vuejs"
            class="col-lg-2 element-item col-md-6 all vuejs nuxtjs"
          >
            <div class="portfolio_box">
              <div class="single_portfolio">
                <div class="overlay"></div>
                <a href="https://www.pactfi.com/">
                  <img
                    class="img-fluid w-100"
                    src="~/assets/img/portfolio/pactFi.png"
                    alt="pactfi"
                  />
                  <div class="icon">
                    <span class="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div class="short_info">
                <h4>PactFi</h4>
                <p>Vue Js, Nuxt Js, Financial website</p>
              </div>
            </div>
          </div>

          <div
            data-category="nextjs"
            class="col-lg-2 element-item col-md-6 all nextjs react"
          >
            <div class="portfolio_box">
              <div class="single_portfolio">
                <div class="overlay"></div>
                <a href="https://dokanepos.com/">
                  <img
                    class="img-fluid w-100"
                    src="~/assets/img/portfolio/dokanepos.png"
                    alt="dokanepos"
                  />
                  <div class="icon">
                    <span class="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div class="short_info">
                <h4>DokanE POS</h4>
                <p>React, NuxtJs, POS Software</p>
              </div>
            </div>
          </div>

          <div
            data-category="nuxtjs"
            class="col-lg-2 element-item col-md-6 all nuxtjs vuejs"
          >
            <div class="portfolio_box">
              <div class="single_portfolio">
                <div class="overlay"></div>
                <a href="https://reformedtech.org/">
                  <img
                    class="img-fluid w-100"
                    src="~/assets/img/portfolio/reformedtech.png"
                    alt="reformedtech"
                  />
                  <div class="icon">
                    <span class="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div class="short_info">
                <h4>ReformedTech</h4>
                <p>Vue Js, Nuxt Js, IT Organization</p>
              </div>
            </div>
          </div>

          <div
            data-category="nodejs"
            class="col-lg-2 element-item col-md-6 all nodejs flutter"
          >
            <div class="portfolio_box">
              <div class="single_portfolio">
                <div class="overlay"></div>
                <a href="https://videotc.com/">
                  <img
                    class="img-fluid w-100"
                    src="~/assets/img/portfolio/videotc.png"
                    alt="video tc"
                  />
                  <div class="icon">
                    <span class="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div class="short_info">
                <h4>Video TC</h4>
                <p>flutter, Node JS, Social Media App</p>
              </div>
            </div>
          </div>

          <div
            data-category="bootstrap"
            class="col-lg-2 element-item col-md-6 all bootstrap"
          >
            <div class="portfolio_box">
              <div class="single_portfolio">
                <div class="overlay"></div>
                <a href="https://devollic.com/hoston">
                  <img
                    class="img-fluid w-100"
                    src="~/assets/img/portfolio/hoston.png"
                    alt="hoston"
                  />
                  <div class="icon">
                    <span class="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div class="short_info">
                <h4>Hoston</h4>
                <p>Hosting Bootstrap 5 HTML Template</p>
              </div>
            </div>
          </div>

          <div
            data-category="vuejs"
            class="col-lg-2 element-item col-md-6 all vuejs nuxtjs"
          >
            <div class="portfolio_box">
              <div class="single_portfolio">
                <div class="overlay"></div>
                <a href="https://ctfn.news/">
                  <img
                    class="img-fluid w-100"
                    src="~/assets/img/portfolio/CTFN.png"
                    alt="ctfn"
                  />
                  <div class="icon">
                    <span class="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div class="short_info">
                <h4>CTFN News</h4>
                <p>Vue Js, Nuxt Js</p>
              </div>
            </div>
          </div>

          <div
            data-category="nuxt"
            class="col-lg-2 element-item col-md-6 all vuejs nuxtjs"
          >
            <div class="portfolio_box">
              <div class="single_portfolio">
                <div class="overlay"></div>
                <a href="https://bitsware.org/">
                  <img
                    class="img-fluid w-100"
                    src="~/assets/img/portfolio/Bitsware.png"
                    alt="bitsware"
                  />
                  <div class="icon">
                    <span class="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div class="short_info">
                <h4>Bitsware</h4>
                <p>Vue Js, Nuxt Js, IT Organization</p>
              </div>
            </div>
          </div>

          <div
            data-category="php"
            class="col-lg-2 element-item col-md-6 all vuejs php"
          >
            <div class="portfolio_box">
              <div class="single_portfolio">
                <div class="overlay"></div>
                <a href="https://smartproperty.xyz/">
                  <img
                    class="img-fluid w-100"
                    src="~/assets/img/portfolio/SmartProperty.png"
                    alt="smart property"
                  />
                  <div class="icon">
                    <span class="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div class="short_info">
                <h4>SmartProperty</h4>
                <p>Vue Js, PHP, Real Estate</p>
              </div>
            </div>
          </div>

          <div
            data-category="vuejs"
            class="col-lg-2 element-item col-md-6 all vuejs nuxtjs"
          >
            <div class="portfolio_box">
              <div class="single_portfolio">
                <div class="overlay"></div>
                <a href="https://softlabny.com/">
                  <img
                    class="img-fluid w-100"
                    src="~/assets/img/portfolio/SoftLabNY.png"
                    alt="softlabny"
                  />
                  <div class="icon">
                    <span class="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div class="short_info">
                <h4>SoftLabNY</h4>
                <p>Vue Js, Nuxt Js, IT Organization</p>
              </div>
            </div>
          </div>

          <div
            data-category="eleventy"
            class="col-lg-2 element-item col-md-6 all eleventy"
          >
            <div class="portfolio_box">
              <div class="single_portfolio">
                <div class="overlay"></div>
                <a href="https://www.theameswellhotel.com/">
                  <img
                    class="img-fluid w-100"
                    src="~/assets/img/portfolio/The-Ameswell-Hotel.png"
                    alt="ameswell hotel"
                  />
                  <div class="icon">
                    <span class="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div class="short_info">
                <h4>The Ameswell Hotel</h4>
                <p>Eleventy, Hotel Booking</p>
              </div>
            </div>
          </div>

          <div
            data-category="eleventy"
            class="col-lg-2 element-item col-md-6 all eleventy"
          >
            <div class="portfolio_box">
              <div class="single_portfolio">
                <div class="overlay"></div>
                <a href="https://marrammontauk.com/">
                  <img
                    class="img-fluid w-100"
                    src="~/assets/img/portfolio/marram-monta-uk.png"
                    alt="marram"
                  />
                  <div class="icon">
                    <span class="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div class="short_info">
                <h4>Marram Monta UK</h4>
                <p>Traveling site, Booking, Eleventy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <h2 class="check_header">Check out the full list</h2>
        <iframe
          class="check_list"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSyXpqFkXSzFnY3Uw3kttHvv3kjkZ-r6m0FEE6jqYiNbPdcd9xNq0E2UTIMDi5m7ANfPGHWMwqzn7fR/pubhtml?widget=true&amp;headers=false"
        ></iframe>
      </div>
    </div>
  </section>
  <!--================End Portfolio Area =================-->
</template>

<style>
.tab-btn {
  border: none;
  background: none;
  text-transform: uppercase;
  cursor: pointer;
}
.tab-btn:hover {
  color: #854fee;
}
.is-checked {
  color: #854fee;
}
</style>
