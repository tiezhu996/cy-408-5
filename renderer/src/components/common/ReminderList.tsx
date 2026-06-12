import { List } from 'antd';
import { Reminder } from '../../../../shared/types/entities';
import { ReminderStatus } from '../../../../shared/types/enums';

export function ReminderList({ reminders, statusFilter }: { reminders: Reminder[]; statusFilter?: ReminderStatus }) {
  const filtered = statusFilter !== undefined ? reminders.filter((item) => item.status === statusFilter) : reminders;
  return <List dataSource={filtered} renderItem={(item) => <List.Item>{item.remindAt} · {item.content}</List.Item>} />;
}
