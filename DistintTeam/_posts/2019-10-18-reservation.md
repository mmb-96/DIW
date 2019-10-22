---
layout: index
title: "Reserva"
permalink: /Reserva
---

<div class="reservationDiv">
    <label class="reservationLabel">
        <fieldset class="reservationFieldset">
            <legend align="center">Reserva</legend>
            <form name="reservationForm" class="reservationForm">
                <input type="text" placeholder="Nombre" name="nombre" id="input"><br>
                <input type="text" placeholder="Apellidos" name="apellidos" id="input"><br>
                <input type="text" placeholder="Telefono" name="telefono" id="input"><br>
                <input type="email" placeholder="Correo Electronico" name="email" id="input"><br>
                <input type="date" name="fecha" id="date"><br>
                <input type="number" placeholder="Comensales" name="comensales" id="comensales"><br>
                <input type="checkbox" name="celiaco">Celiaco
                <br>
                <input type="checkbox" name="sinLactosa">Sin lactosa
                <br>
                <input type="button" value="Enviar" class="enviar" onclick="show()"></form>
                <div class="popup">
                    <span class="popuptext" id="myPopup">RESERVADO</span>
                </div>
        </fieldset>
    </label>
</div>
<br>
<br>
<div align="center">
    <img src="{{ site.baseurl }}/assets/images/banner.jpg" id="anuncio">
</div>
<script src="{{ site.baseurl }}/assets/js/reservation.js"></script>