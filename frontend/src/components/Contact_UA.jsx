import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { mockAPI_UA } from '../mock_ua';

const Contact_UA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    position: 'delivery-driver'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await mockAPI_UA.submitApplication(formData);
      if (response.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          position: 'delivery-driver'
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Помилка подання заявки:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Зв'язатися з нами
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Готові розпочати кар'єру з командою GENVEX? Зв'яжіться з нами сьогодні. 
            Ми тут, щоб відповісти на ваші питання та провести вас через процес подачі заявки.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  Відвідайте наш офіс
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900">GENVEX Team</p>
                    <p className="text-gray-700">Unterm Heilbrunnen 8</p>
                    <p className="text-gray-700">21029 Гамбург, Німеччина</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-gray-600">Пн-Сб: 8:00 - 22:00</span>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      Розташований в серці логістичного району Гамбурга, легко доступний громадським транспортом.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Контактна інформація
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Телефон</p>
                      <a 
                        href="tel:+4917640099823" 
                        className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                      >
                        +49 176 400 99823
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Електронна пошта</p>
                      <a 
                        href="mailto:genvexteam@gmail.com" 
                        className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                      >
                        genvexteam@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-blue-50 shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  Наша обіцянка відповіді
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Підтвердження заявки протягом 24 годин</li>
                  <li>• Первинне телефонне інтерв'ю протягом 2-3 робочих днів</li>
                  <li>• Повний процес найму зазвичай займає 1-2 тижні</li>
                  <li>• Пряма телефонна підтримка в робочі години</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          <div>
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <Send className="h-5 w-5 mr-2 text-blue-600" />
                  Подайте свою заявку
                </CardTitle>
                <Badge className="bg-green-100 text-green-800 w-fit">
                  Швидка подача заявки
                </Badge>
              </CardHeader>
              <CardContent className="p-6">
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <p className="text-green-800 font-medium">Заявку успішно подано!</p>
                    </div>
                    <p className="text-green-700 text-sm mt-1">
                      Ми зв'яжемося з вами протягом 2-3 робочих днів для планування інтерв'ю.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-medium">Щось пішло не так</p>
                    <p className="text-red-700 text-sm mt-1">
                      Будь ласка, спробуйте ще раз або зверніться до нас безпосередньо за адресою genvexteam@gmail.com
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Повне ім'я *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Введіть ваше повне ім'я"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Електронна адреса *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Номер телефону *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="+49 xxx xxx xxxx"
                    />
                  </div>

                  <div>
                    <Label htmlFor="position">Посада, що цікавить</Label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="delivery-driver">Водій доставки (повна зайнятість)</option>
                      <option value="part-time-driver">Водій неповна зайнятість</option>
                      <option value="other">Інша посада</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Повідомлення або питання (необов'язково)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Розкажіть про свій досвід, поставте питання або поділіться чим завгодно, що ви хочете, щоб ми знали..."
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 transition-colors duration-200 disabled:opacity-50"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Подача заявки...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Подати заявку
                        </>
                      )}
                    </Button>
                  </div>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600">
                    Воліли б подзвонити? Зв'яжіться з нами за номером{' '}
                    <a 
                      href="tel:+4917640099823" 
                      className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                    >
                      +49 176 400 99823
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact_UA;