from django.db import models

class Service(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    duration = models.PositiveIntegerField(help_text="Duração em minutos")
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name