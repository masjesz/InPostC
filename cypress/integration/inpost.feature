Feature: Śledzenie paczek na stronie głónej InPost

  Scenario Outline: Powienien znaleść paczkę dla wybranego numeru
    Given Otwieram główną stronę Inpost
    When Wpisuję <numer> paczki
    Then Paczka zostaje znaleziona /

    Examples:
| numer |
|695010139244330118871532|
|614300139276200016725507|
|566002139228300128891811|
