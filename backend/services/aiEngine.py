import numpy as np
from sklearn.linear_model import LinearRegression

# Ejemplo simple de modelo de IA para predecir la talla en función de las medidas del usuario.
class AIEngine:
    def __init__(self):
        # Ejemplo de datos ficticios para entrenamiento del modelo de regresión
        # X: [altura, pecho, cintura, caderas]
        self.X_train = np.array([
            [160, 85, 70, 90],
            [170, 90, 80, 95],
            [180, 100, 85, 105]
        ])
        # Y: [talla recomendada (S, M, L, XL mapeadas a 1, 2, 3, 4)]
        self.Y_train = np.array([1, 2, 3])

        # Entrenar un modelo de regresión lineal simple
        self.model = LinearRegression()
        self.model.fit(self.X_train, self.Y_train)

    def predict_size(self, height, chest, waist, hips):
        # Predecir la talla basada en las medidas ingresadas
        X_test = np.array([[height, chest, waist, hips]])
        prediction = self.model.predict(X_test)
        # Mapear la predicción a una talla: 1=S, 2=M, 3=L, 4=XL
        size_mapping = {1: 'S', 2: 'M', 3: 'L', 4: 'XL'}
        predicted_size = round(prediction[0])
        return size_mapping.get(predicted_size, "Talla no encontrada")

# Ejemplo de uso del AI Engine
if __name__ == "__main__":
    engine = AIEngine()
    # Supongamos que estas son las medidas del usuario
    height = 175
    chest = 92
    waist = 78
    hips = 94

    recommended_size = engine.predict_size(height, chest, waist, hips)
    print(f"Talla recomendada: {recommended_size}")
