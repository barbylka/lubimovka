# Check selectors

1. header__container

2. .header__button

3. topnav {
  display: flex;  <- yes or no?
}

4. topnav__buttons .topnav__button:nth-child(2)::before {
  content: url("../../../images/header/plus.svg");
  width: 25px;
  height: 25px;
}

5. topnav__socials

6. CHANGE topnav__socials .topnav__button { to topnav__social and edit .topnav__buttons { 

7. All buttons are links?

8. Check todo extension VS Code

9. heart-logo or logo?

Убрать размеры кнопок?
<!-- <section class="sitemaps">
        <img src="" alt="" class="logo-lubimovka" />
        <address class="address">
          <h7 class="address__title">Площадка «8/3»</h7>
          <p class="address__subtitle">
            Москва, ул. Казакова, 8, стр. 3Метро «Курская»
          </p>
        </address>

        <ul class="sitemap">
          <li>
            <ul class="sitemap__links">
              <li>
                <a href="#" class="sitemap__link"> Любимовка </a>
              </li>
              <li>
                <a href="#" class="sitemap__link"> Афиша </a>
              </li>
              <li>
                <a href="#" class="sitemap__link"> Библиотека </a>
              </li>
              <li>
                <a href="#" class="sitemap__link"> Блог </a>
              </li>
              <li>
                <a href="#" class="sitemap__link"> Новости </a>
              </li>
            </ul>
          </li>
          <li>
            <ul class="sitemap__links">
              <li>
                <a href="#" class="sitemap__link"> О фестивале </a>
              </li>
              <li>
                <a href="#" class="sitemap__link"> Организаторы </a>
              </li>
              <li>
                <a href="#" class="sitemap__link"> История </a>
              </li>
              <li>
                <a href="#" class="sitemap__link"> Контакты </a>
              </li>
              <li>
                <a href="#" class="sitemap__link"> Для прессы </a>
              </li>
            </ul>
          </li>
          <li>
            <ul class="sitemap__links">
              <li>
                <a href="#" class="sitemap__link"> Все проекты </a>
              </li>
              <li>
                <a href="#" class="sitemap__link"> Любимовка.Ещё </a>
              </li>
              <li>
                <a href="#" class="sitemap__link"> Спектакли </a>
              </li>
              <li>
                <a href="#" class="sitemap__link"> Сборник Любимовка.Пьесы </a>
              </li>
              <li>
                <a href="#" class="sitemap__link"> Lark+Любимовка </a>
              </li>
              <li>
                <a href="#" class="sitemap__link"> Практика постдраматурга </a>
              </li>
              <li>
                <a href="#" class="sitemap__link"> Эхо Любимовки </a>
              </li>
            </ul>
          </li>
        </ul>

        <ul class="partners">
          <li class="partners__item">
            <a href="#" class="partner__link">
              <img src="" alt="" class="partner__logo" />
            </a>
            <p class="partner__title">Генеральный партнёр</p>
          </li>
          <li class="partners__item">
            <a href="#" class="partner__link">
              <img src="" alt="" class="partner__logo" />
            </a>
            <p class="partner__-title"></p>
          </li>
          <li class="partners__item">
            <a href="#" class="partner__link">
              <img src="" alt="" class="partner__logo" />
            </a>
            <p class="partner__-title">Онлайн-трансляции</p>
          </li>
          <li class="partners__item">
            <a href="#" class="partner__link">
              <img src="" alt="" class="partner__logo" />
            </a>
            <p class="partner__title"></p>
          </li>
        </ul>
      </section>

      <footer class="footer">
        <p class="footer__copyright">© Любимовка, 2021</p>
        <p class="footer__politics">Политика конфиденциальности</p>

        <div class="footer__design">
          <img src="" alt="" class="footer__design-logo" />
          <p class="footer__design-name">дизайн сайта — shishki.collective</p>
        </div>

        <p class="footer__creators">
          вёрстка и разработака — студенты Яндекс.Практикума
        </p>
      </footer> -->