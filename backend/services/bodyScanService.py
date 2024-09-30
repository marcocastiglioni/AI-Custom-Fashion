import cv2

def process_body_scan(video_stream):
    cap = cv2.VideoCapture(video_stream)
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        # Procesar el frame de video para calcular medidas corporales
        cv2.imshow('Body Scan', frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    cap.release()
    cv2.destroyAllWindows()
