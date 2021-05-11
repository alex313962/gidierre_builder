# gidierre_builder

## Authors

Mitra98t  
alex313962

***

## Chi sono?

Sono un bot di discord per la gestione di canali per il gioco di ruolo

Nasco per semplificare la gestione dei server di discord.

***

## Comandi

### Indice

- [add](#add)
- [remove](#remove)
- [reaction](#reaction)
- [finish](#finish)
- [remove](#remove)
- [setdj](#setdj)
- [activetable](#activetable)
- [help](#help)

### ADD 

**Add** permette di aggiungere una categoria nel server. All'interno, troveremo 2 canali con restrizioni (regole, materiale) dove potranno scrivere solo i master e un canale testuale dove tirare i dadi/scrivere appunti/messaggi. Sarà ovviamente presente pure un canale vocale aperto a tutti per giocare/fare da spettatore. Si tratta di una soluzione veloce, adatta principalmente a oneshot o eventi. 

![add_preview](/img_docs/add_preview.PNG)

![add_preview](/img_docs/add.PNG)

### REMOVE 

**Remove** rimuove l'intera categoria creata con |add ma non elimina l'eventuale ruolo

![remove_preview](/img_docs/remove_preview.PNG)

### REACTION

**Reaction** ti permette di creare un tavolo aperto per cercare giocatori.  
Per usarlo, bisogna prima creare un messaggio di presentazione che servirà come riferimento ai giocatori. Una volta fatto questo, bisognerà rispondere al messaggio e inserire il comando |reaction
specificando il numero di giocatori massimo e il nome del ruolo che avrà il giocatore nella campagna(consiglio di usare il nome della campagna stessa)

![reaction_preview](/img_docs/reaction_preview.PNG)

una volta inviato, ci troveremo davanti a questa situazione

![reaction_created_preview](/img_docs/created_preview.PNG)

la reaction aggiunta indica il numero di persone che hanno richiesto un posto. Tipo in questo caso, una persona ha fatto richiesta

![reaction_check](/img_docs/reaction_check.PNG) 

e il ruolo "nome_ruolo" è stato aggiunto al suo utente 

![reaction_role](/img_docs/reaction_role.PNG) 

quando il tavolo verrà completato, il bot notificherà in privato al creatore della campagna
![reaction_bot_pm_preview](/img_docs/reaction_bot_pm_preview.PNG) 
![reaction_bot_pm_message](/img_docs/reaction_bot_pm_message.PNG) 

questo ruolo può essere usato per creare dei tavoli bloccati con |add.

### FINISH

**Finish** serve per, ahime, terminare le campagne. Una volta lanciato questo comando, non ci si potrà più prenotare al post e il ruolo verrà eliminato dal server. Nel caso dovesse essere ricreato con un tavolo successivo, i vecchi partecipanti alla campagna non avranno quel ruolo


### SETDJ

**Setdj** è un comando esclusivamente pensato per chi usa Rythm bot. 
permette a un utente normale di acquisire un ruolo dummy di nome DJ che permettere di stoppare il bot. Il ruolo rimarrà solo per 30 secondi così da disincertivarne l'utilizzo e sarà disattivabile in fase di init    

### ACTIVETABLES

**ActiveTables** è il comando per vedere le campagne attive nel server. 

![reaction_bot_pm_preview](/img_docs/activetables_empty.PNG) ![reaction_bot_pm_preview](/img_docs/activetables_full.PNG) 


### HELP

comando per visualizzare una versione ridotta di questa docs direttamente dentro il vostro server