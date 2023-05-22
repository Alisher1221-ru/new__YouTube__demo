import { Box } from "@mui/material";
import home from "../img/Без названия.png"
import shorts from "../img/viber.png"
import potpiski from "../img/3741721.png"
import bibliateka from "../img/5942620.png"
import history from "../img/873051-200.png"
import subscy from "../img/image.png"
import pojje from "../img/simple+and+minimal+line+icons+clock-1324450514352355098.png"
import Like from "../img/like.png"
import ogon from "../img/2126650-200.png"
import music from "../img/6020153.png"
import Live from "../img/live.png"
import Новости from "../img/Новости.png"
import Спорт from "../img/Спорт.png"
import lampa from "../img/lampa.png"
import ojejda from "../img/ojejda.png"


import Cart from "./cart";


function Select() {


    return(
        <Box component={"section"}>
            <Box component={"div"}>
                <Cart img={home} title="Главная"/>
                <Cart img={shorts} title="Shorts"/>
                <Cart img={potpiski} title="Подписки"/>
                <hr />
                <br />
                <Cart img={bibliateka} title="Библиотека"/>
                <Cart img={history} title="История"/>
                <Cart img={subscy} title="Ваши видео"/>
                <Cart img={pojje} title="Смотреть позже"/>
                <Cart img={Like} title="Понравившиеся"/>
                <hr />
                <br />
                <p className="selectP">Навигатор</p>
                <Cart img={ogon} title="В тренде"/>
                <Cart img={music} title="Музыка"/>
                <Cart img={Live} title="Трансляции"/>
                <Cart img={Новости} title="Новости"/>
                <Cart img={Спорт} title="Спорт"/>
                <Cart img={lampa} title="Обучение"/>
                <Cart img={ojejda} title="Мода и красота"/>
                <hr />
                <br />
                <p className="p_text">О сервисе Прессе <br /> Авторские права <br /> Связаться с нами Авторам <br /> Рекламодателям <br /> Разработчикам <br /> <br /> Условия использования <br /> Конфиденциальность <br /> Правила и безопасность <br /> Как работает YouTube <br /> Тестирование новых</p>
                <p className="text__rec">© 2023 Google LLC</p>
            </Box>
        </Box>
    )
}

export default Select
