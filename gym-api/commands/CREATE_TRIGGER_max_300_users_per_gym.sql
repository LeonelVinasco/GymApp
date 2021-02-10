DROP TRIGGER IF EXIST user_gym
CREATE TRIGGER user_gym
BEFORE INSERT
ON user
FOR EACH ROW
BEGIN
    IF (SELECT COUNT(*) FROM user WHERE user.gym = (NEW.gym))>2
    BEGIN
        declare msg varchar(128);
        set msg = concat('MyTriggerError: Trying to insert a negative value in trigger_test: ', cast(new.id as char));
        signal sqlstate '45000' set message_text = msg;
    END
END;