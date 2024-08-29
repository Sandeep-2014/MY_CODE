def individual_data(todo):
    return{
        "id": str(todo["_id"]),
        "name":todo["name"],
        "email":todo["email"],
        "mobileno":todo["mobileno"],
        "status":todo["is_completed"]
    }

def all_data(todos):
    return [individual_data(todo) for todo in todos ]