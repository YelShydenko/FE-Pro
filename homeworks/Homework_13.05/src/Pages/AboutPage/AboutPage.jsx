import React from "react";
import cls from "./AboutPage.module.css";
import cat1 from "../../assets/cat1.png";
import cat2 from "../../assets/cat2.png";

const AboutPage = () => {
  return (
    <>
      <section class={cls.about__company}>
        <h2>О компании</h2>
        <div class={cls.company__info}>
          <img src={cat1} alt="" />
          <div class={cls.info}>
            <p>
              Студия Pallas cat была создана с целью уместить на один сайт все -
              все материалы, что человек изучает на JS, но сделать это так,
              чтобы картинка нашего сайта не пострадала, чтобы мы могли
              посмотреть на результаты нашей практики и сказать: “да, я я это
              сделал и сделал это красиво”
            </p>
            <h3>Введение</h3>
            <p>
              На данной странице пользователю дана возможность по клику на одну
              из кнопок открыть модальное окно с соответствующим содержимым.{" "}
              <br />
              Сайт будет усложняться по мере погружению в Javascript.
            </p>
          </div>
        </div>
      </section>

      <section class={cls.instructions}>
        <h2>Инструкция. Шаги</h2>
        <div class={cls.steps__container}>
          <div class={cls.step}>
            <span>1.</span>
            <p>
              Видим кнопку, например, fetch. По клику на эту кнопку открывается
              модальное окно
            </p>
          </div>
          <div class={cls.step}>
            <span>2.</span>
            <p>
              В модальном окне вытаскиваем данные, согласно поставленной задаче
            </p>
          </div>
          <div class={cls.step}>
            <span>3.</span>
            <p>
              Каждое модальное окно должно быть способным закрываться и
              открываться по клику
            </p>
          </div>
          <div class={cls.step}>
            <span>4.</span>
            <p>
              Каждое модальное окно должно быть способным закрываться и
              открываться по клику
            </p>
          </div>
        </div>
      </section>

      <section class={cls.evaluation}>
        <div class={cls.evaluation__info}>
          <div class={cls.evaluation__info__container}>
            <h2>Оценка</h2>
            <p>
              Оценка производится в соотвествии с соблюдением разметки, качества
              использованных тегов ( семантически ), качеству написания js кода
              и количеству выполненых заданий
            </p>
          </div>
          <img src={cat2} alt="" />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
