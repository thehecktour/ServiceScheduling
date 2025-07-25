from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Service, Appointment
from .serializers import ServiceSerializer, AppointmentSerializer, UserRegistrationSerializer
from .permissions import IsOwnerOrAdmin
from rest_framework.decorators import action

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    permission_classes = [IsAuthenticated]

from rest_framework import viewsets, generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Service, Appointment
from .serializers import ServiceSerializer, AppointmentSerializer, UserRegistrationSerializer
from .permissions import IsOwnerOrAdmin
from rest_framework.decorators import action

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    permission_classes = [IsAuthenticated]

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.none()
    serializer_class = AppointmentSerializer
    permission_classes = [IsAuthenticated, IsOwnerOrAdmin]

    def get_queryset(self):
        if self.request.user.is_staff:
            return Appointment.objects.all()
        return Appointment.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=True, methods=["post"], permission_classes=[IsAuthenticated])
    def complete(self, request, pk=None):
        appointment = self.get_object()
        if appointment.user != request.user and not request.user.is_staff:
            return Response({"detail": "Sem permissão."}, status=status.HTTP_403_FORBIDDEN)
        
        if appointment.status == "completed":
            return Response({"detail": "Agendamento já foi concluído."}, status=status.HTTP_400_BAD_REQUEST)

        appointment.status = "completed"
        appointment.save()

        serializer = AppointmentSerializer(appointment)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UserRegistrationView(generics.CreateAPIView):
    serializer_class = UserRegistrationSerializer
    permission_classes = [AllowAny]