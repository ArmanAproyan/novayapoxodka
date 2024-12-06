'use client'
import { useEffect, useRef } from 'react';
import styles from './style.module.scss';

const About = () => {
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    } else {
                        entry.target.classList.remove(styles.visible);
                    }
                });
            },
            { threshold: 0.1 }
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.about}>
                <div className={styles.about__text_block}>
                    <h1>Про Нас</h1>
                </div>
                <h1 className={styles.about__title}>Знания о нас</h1>

                <section
                    className={`${styles.about__section} ${styles.left}`}
                    ref={(el) => (sectionRefs.current[0] = el as HTMLDivElement | null | any)}
                >
                </section>

                <section
                    className={`${styles.about__section} ${styles.right}`}
                    ref={(el) => (sectionRefs.current[1] = el as HTMLDivElement | null | any)}
                >
                    <h2>Наша миссия</h2>
                    <p>
                        🛠️ Помочь вам продлить срок службы вашей обуви и вернуть ей первоначальный вид. <br />
                        👟 Мы понимаем, как важна комфортная и стильная обувь в вашей повседневной жизни, <br />
                        🤝 и стараемся сделать всё возможное, чтобы вы были довольны нашим обслуживанием.
                    </p>
                </section>

                <section
                    className={`${styles.about__section} ${styles.left}`}
                    ref={(el) => (sectionRefs.current[2] = el as HTMLDivElement | null | any)}
                >
                    <h2>Наши услуги</h2>
                        <p>
                            🩺 Охватывают все аспекты ремонта обуви: от простого устранения дефектов <br />
                            🧵 до индивидуального изготовления стелек. <br />
                            🛡️ Мы используем только качественные материалы <br />
                            ⚙️ и новейшие технологии, чтобы гарантировать высокое качество выполнения работ.
                        </p>

                </section>

                <section
                    className={`${styles.about__section} ${styles.right}`}
                    ref={(el) => (sectionRefs.current[3] = el as HTMLDivElement | null | any)}
                >
                    <h2>Почему выбирают нас?</h2>
                    <ul>
                        <li>
                            <strong>🎓 Профессионализм:</strong> Наша команда состоит из опытных специалистов с большим стажем работы.
                        </li>
                        <li>
                            <strong>🤝 Индивидуальный подход:</strong> Мы учитываем все ваши пожелания и предпочтения.
                        </li>
                        <li>
                            <strong>💰 Доступные цены:</strong> Мы предлагаем конкурентоспособные расценки на все виды услуг.
                        </li>
                        <li>
                            <strong>🛡️ Гарантия качества:</strong> Мы уверены в своем ремонте и предоставляем гарантию на все выполненные работы.
                        </li>
                    </ul>

                </section>

                <section
                    className={`${styles.about__section} ${styles.left}`}
                    ref={(el) => (sectionRefs.current[4] = el as HTMLDivElement | null | any)}
                >
                </section>
            </div>
        </div>
    );
};

export default About;