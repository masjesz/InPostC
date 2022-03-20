Feature: Śledzenie paczek na stronie głównej InPost

  Scenario: Powienien pokazać status "Paczka Dostarczona"
    Given Otwieram główną stronę Inpost
    When Wpisuję numer 695010139244330118871532 paczki
    Then Paczka dostarczona

  Scenario: Powienien pokazać status "Paczka przygotowana przez Nadawcę"
    Given Otwieram główną stronę Inpost
    When Wpisuję numer 614300139276200016725507 paczki
    Then Paczka przygotowana przez Nadawcę

  Scenario: Nie powienien znaleść paczki dla wybranego numeru
    Given Otwieram główną stronę Inpost
    When Wpisuję numer 566002139228300128891811 paczki
    Then Paczka nie zostaje znaleziona
  