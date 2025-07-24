from django.db import models

class Service(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    duration = models.PositiveIntegerField(help_text="Duração em minutos")
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name
    

class Appointment(models.Model):
    STATUS_CHOICES = [
        ("pending", "Pendente"),
        ("confirmed", "Confirmado"),
        ("cancelled", "Cancelado"),
    ]
    user = models.ForeignKey(backend.src.settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    date_time = models.DateTimeField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default="pending")

    def __str__(self):
        return f"{self.user} - {self.service} em {self.date_time}"