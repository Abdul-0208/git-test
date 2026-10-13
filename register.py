from models import User, engine
from sqlalchemy.orm import Session
from pwdlib import PasswordHash
password_hash = PasswordHash.recommended()
hashed_password = password_hash.hash("Pynex@2026")
new_user = User(
    email="admin@pynex.com",
    password_hash= hashed_password
)
with Session(engine) as db:
    db.add(new_user)
    db.commit()