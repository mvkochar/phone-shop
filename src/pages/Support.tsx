import React from 'react'
import './Support.css'

const Support = () => {
    return (
        <main>
            <section>
                <h2 className="support-title">Служба підтримки <span>клієнтів «Mobile World»</span></h2>
            </section>
            <section>
                <div className="support-main d-f jc-sb align-center">
                    <div><img src="images/support-main.png" alt="support-main" /></div>
                    <div className="support-main-desc">
                        Раді вітати Вас на сторінці Служби підтримки клієнтів компанії «Mobile World»! Тут ви зможете вирішити будь-яке
                        питання, отримати якісну консультацію, поділитися враженнями від покупки та запропонувати цікаві пропозиції
                        до розгляду. <br /> Для нас дуже важлива думка кожного, адже це безпосередньо впливає на процес покращення сервісного
                        обслуговування у мережі.
                    </div>
                </div>
            </section>
            <section>
                <div className="support-connect">
                    <h3 className="support-connect-title">Зв'яжіться з нами</h3>
                    <div className="support-connect-subtitle"> Ми на зв'язку</div>
                    <div className="support-connect-time">з 09:00 до 21:00</div>
                    <div className="support-connect-box d-f jc-sb">
                        <div className="support-connect-item">
                            <div className="connect-item-title">Гаряча лінія</div>
                            <div className="connect-item-subtitle">(044) 600 12 45</div>
                        </div>
                        <div className="support-connect-item">
                            <div className="connect-item-title">Напишіть нам</div>
                            <form action="" className='connect-item-fm'>
                                <div className="input-bl d-f">
                                    <input type="text" name="clientName" placeholder="Ваше ім'я" />
                                    <input type="email" name='email' placeholder='Ваш актуальний email' />
                                </div>
                                <textarea name="msg" placeholder='Ваше повідомлення'></textarea>
                                <button>Відправити</button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}

export default Support